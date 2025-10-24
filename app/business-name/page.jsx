'use client'
import DomainStatus from '@/components/DomainStatus'
import Sidebar from '@/components/Sidebar'
import { useQueryContext } from '@/context/BusinessNameContext'
import { generatePrompt } from '@/helpers/function'
import { GoogleGenerativeAI } from '@google/generative-ai'
import React, { useEffect, useRef, useState } from 'react'

const BusinessName = () => {
    const { query } = useQueryContext()
    const [names, setNames] = useState([])
    const [loading, setLoading] = useState(false)
    const observeDiv = useRef()
    const [page, setPage] = useState(1)
    const [refresh, setRefresh] = useState(false)
    const [domainDialogOpen, setDomainDialogOpen] = useState(false)
    const [domain, setDomain] = useState()

    const fetchBusinessName = async () => {
        try {
            setLoading(true)
            const genAI = new GoogleGenerativeAI(process.env.GEMINI_API)
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })
            const inputs = { ...query, names }
            const prompt = generatePrompt(inputs)
            const result = await model.generateContent(prompt)
            const unfilteredJsonString = result.response.text()
            const jsonString = unfilteredJsonString.replace(/```json|```/g, '')
            const jsonData = JSON.parse(jsonString)
            if (jsonData && jsonData.names) {
                const newNames = jsonData.names
                setNames([...names, ...newNames])
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => { fetchBusinessName() }, [page])
    useEffect(() => { setNames([]); fetchBusinessName() }, [refresh])

    const handleIntersection = (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) setPage(prev => prev + 1)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, { root: null, rootMargin: '-10px', threshold: [0, 0.5, 1] })
        if (observeDiv.current) observer.observe(observeDiv.current)
        return () => { if (observeDiv.current) observer.unobserve(observeDiv.current) }
    }, [])

    const getDomainStatus = (businessname) => {
        const domain = businessname.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() + '.com'
        setDomain(domain)
        setDomainDialogOpen(!domainDialogOpen)
    }

    return (
        <div className='px-5 sm:px-10 md:px-20 lg:px-32 mb-10'>
            <h1 className='mt-32 text-3xl sm:text-4xl lg:text-5xl text-white font-semibold text-center border-b pb-10 border-gray-500'>
                Business Name
            </h1>
            <div className='flex flex-col lg:flex-row justify-center items-start gap-5 lg:gap-10 mt-10'>
                <div className='w-full lg:w-1/4 mb-5 lg:mb-0'>
                    <Sidebar refresh={refresh} setRefresh={setRefresh} />
                </div>
                <div className='w-full lg:w-3/4'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8'>
                        {names && names.map((singleName, index) => (
                            <div
                                key={index}
                                onClick={() => getDomainStatus(singleName)}
                                className='border border-gray-600 rounded p-3 sm:p-4 cursor-pointer text-white text-sm sm:text-base hover:bg-primary hover:text-black text-center break-words'
                            >
                                {singleName}
                            </div>
                        ))}
                    </div>
                    {loading && <div className='text-center text-primary pt-5 text-lg'>Loading...</div>}
                    <div ref={observeDiv} className='h-2'></div>
                </div>
            </div>
            <DomainStatus open={domainDialogOpen} setOpen={setDomainDialogOpen} domain={domain} />
        </div>
    )
}

export default BusinessName

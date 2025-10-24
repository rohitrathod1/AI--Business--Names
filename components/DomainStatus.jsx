'use client'
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { toast } from '@/hooks/use-toast'

const DomainStatus = ({ open, setOpen, domain }) => {
    const [loading, setLoading] = useState(false)
    const [domainStatus, setDomainStatus] = useState(null)

    useEffect(() => {
        const getDomainStatus = async () => {
            if (!domain) return

            try {
                setLoading(true)
                const response = await fetch(
                    `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${process.env.NEXT_PUBLIC_DOMAIN_STATUS_API}&domainName=${domain}&credits=DA&outputFormat=JSON`
                )

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`)
                }

                const data = await response.json()
                
                // Ensure the path exists
                if (data?.DomainInfo?.domainAvailability) {
                    setDomainStatus(data.DomainInfo.domainAvailability)
                } else {
                    setDomainStatus('UNKNOWN')
                }
            } catch (error) {
                console.error(error)
                toast({
                    title: 'Domain Status Error',
                    description: error.message || 'Something went wrong!'
                })
                setDomainStatus('ERROR')
            } finally {
                setLoading(false)
            }
        }

        getDomainStatus()
    }, [domain])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-4xl font-semibold text-center mb-3">
                        Domain Status
                    </DialogTitle>

                    {loading ? (
                        <p className="text-center">
                            Getting status for domain: <b>{domain}</b>
                        </p>
                    ) : (
                        <div>
                            <p className="mb-3 text-center">
                                Availability status of domain: <b>{domain}</b>
                            </p>

                            <div className="flex justify-center">
                                {domainStatus === 'AVAILABLE' ? (
                                    <span className="bg-green-500 text-xl px-10 text-white rounded py-3">
                                        {domainStatus}
                                    </span>
                                ) : (
                                    <span className="bg-red-500 text-xl px-10 text-white rounded py-3">
                                        {domainStatus || 'UNKNOWN'}
                                    </span>
                                )}
                            </div>
                        </div>
                    )}
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default DomainStatus

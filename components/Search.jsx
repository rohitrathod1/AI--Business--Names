'use client'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { toast } from '@/hooks/use-toast'
import { QueryDialog } from './QueryDialog'
import { useQueryContext } from '@/context/BusinessNameContext'

const Search = () => {
  const { query, updateQuery } = useQueryContext()
  const [keyword, setKeyword] = useState('')
  const [queryDialog, setQueryDialog] = useState(false)

  const handleKeyword = (e) => {
    setKeyword(e.target.value)
  }

  const showQueryDialog = () => {
    if (!keyword.trim()) {
      return toast({
        title: 'Failed to generate business name',
        description: 'Please enter keyword to generate business name.'
      })
    }
    updateQuery({ keyword })
    setQueryDialog(!queryDialog)
  }

  return (
    <div className="flex justify-center items-center pt-5 px-4">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 w-full max-w-2xl">
        <Input
          onChange={handleKeyword}
          placeholder="Enter keyword..."
          className="h-14 text-white md:text-md border-primary w-full"
        />
        <Button
          onClick={showQueryDialog}
          className="h-14 text-lg px-5 w-full md:w-auto"
        >
          Generate
        </Button>
      </div>
      <QueryDialog
        queryDialog={queryDialog}
        setQueryDialog={setQueryDialog}
        keyword={keyword}
      />
    </div>
  )
}

export default Search

'use client'
import React, { useState, useEffect } from 'react'
import { Card, CardContent } from './ui/card'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { nameStyle, Randomness } from '@/helpers/constant'
import { useQueryContext } from '@/context/BusinessNameContext'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Sidebar = ({ refresh, setRefresh }) => {
  const { query, updateQuery } = useQueryContext()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNameStyle = (nameStyle) => updateQuery({ nameStyle })
  const handleRandomness = (randomness) => updateQuery({ randomness })
  const handleFormField = (e) => updateQuery({ [e.target.name]: e.target.value })
  const generateBusinessName = () => setRefresh(!refresh)

  if (!mounted) return null

  return (
    <Card className="bg-transparent border-gray-600 rounded-lg pt-4 w-full md:w-80">
      <CardContent className="flex flex-col gap-6">
        <div>
          <h4 className="text-white text-lg md:text-xl font-semibold mb-3">Name Style</h4>
          <RadioGroup value={query?.nameStyle || 'Auto'} onValueChange={handleNameStyle} className="flex flex-col gap-2">
            {nameStyle.map((singleNameStyle) => (
              <Label
                key={`namestyle${singleNameStyle.id}`}
                htmlFor={`namestyle${singleNameStyle.id}`}
                className="flex items-center gap-3 cursor-pointer"
              >
                <RadioGroupItem value={singleNameStyle.name} id={`namestyle${singleNameStyle.id}`} />
                <p className="text-white font-medium">{singleNameStyle.name}</p>
              </Label>
            ))}
          </RadioGroup>
        </div>

        <div>
          <h4 className="text-white text-lg md:text-xl font-semibold mb-3">Randomness</h4>
          <RadioGroup value={query?.randomness || 'Medium'} onValueChange={handleRandomness} className="flex flex-col gap-2">
            {Randomness.map((singleRandomness) => (
              <Label
                key={`randomness${singleRandomness.id}`}
                htmlFor={`randomness${singleRandomness.id}`}
                className="flex items-center gap-3 cursor-pointer"
              >
                <RadioGroupItem value={singleRandomness.name} id={`randomness${singleRandomness.id}`} />
                <p className="text-white font-medium">{singleRandomness.name}</p>
              </Label>
            ))}
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <Label className="text-white mb-1">Keyword</Label>
            <Input
              value={query?.keyword || ''}
              name="keyword"
              onChange={handleFormField}
              placeholder="Keyword"
              className="text-white w-full"
            />
          </div>
          <div>
            <Label className="text-white mb-1">Description</Label>
            <Input
              value={query?.description || ''}
              onChange={handleFormField}
              name="description"
              placeholder="Description"
              className="text-white w-full"
            />
          </div>
          <Button className="mt-2 w-full md:w-auto" onClick={generateBusinessName}>
            Generate
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Sidebar

import { useState, useEffect } from 'react'
import { education } from '../mocks/portfolio'

export function useEducation () {
  const [professional, setProfessional] = useState([])
  const [technology, setTechnology] = useState([])

  useEffect(() => {
    setProfessional(education.professional)
    setTechnology(education.technology)
  }, [])

  return [professional, technology]
}

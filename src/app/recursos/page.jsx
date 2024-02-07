'use client'

import { Divider } from '@nextui-org/react'
import RecHero from '../components/Recursos/RecHero'
import RecCriando from '../components/Recursos/RecCriando'
import RecLembre from '../components/Recursos/RecLembre'
import RecCards from '../components/Recursos/RecCards'
import RecCordel from '../components/Recursos/RecCordel'
import RecCordelMais from '../components/Recursos/RecCordelMais'
import RecRedesDD from '../components/Recursos/RecRedesDD'
import RecSaibaMais from '../components/Recursos/RecSaibaMais'



function Recursos() {
  return (
    <>
        
        <RecHero />
        <RecCriando />
        <RecSaibaMais />
        <RecRedesDD />
        <RecLembre />

        
        <RecCordel />
        <RecCordelMais />
    </>
    
  )
}

export default Recursos
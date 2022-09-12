import React from 'react'

export default function VoteResults({democrats, republic, total, democratsPercent, republicPercent}) {
  return (
    <div>
        <div>
            За демократів:
            <ul>
                <li>Всього: {democrats}</li>
                <li>В процентах: {democratsPercent}%</li>
            </ul>
        </div>
        <div>
            За республіканців:
            <ul>
                <li>Всього: {republic}</li>
                <li>В процентах: {republicPercent}%</li>
            </ul>
        </div>
        <div>
            Всього: {total}
        </div>
    </div>
  )
}

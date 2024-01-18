import React from 'react'

export default function AboutHistory() {
    const points =[
        {
            year:"1975",
            title:"Birth in Garden City",
            subtitle:"La Poire's first store opens, igniting passion.",
            img:"/images/history/1.webp"
        }
    ]
  return (
    <div className="bg-greenBlack">
        <div className="container mx-auto">
            <h3>{"La Poire's Time-Honored History"}</h3>
            <p>From Humble Beginnings to National Stardom</p>
        </div>
    </div>
  )
}

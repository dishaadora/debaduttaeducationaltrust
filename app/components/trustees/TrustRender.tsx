"use client"

import { useEffect, useState } from "react";
import { getAllTrustees } from "@/app/lib/trustees";
import Trustees from "./Trustees";

export default function TrustRender() {

  const [trustees, setTrustees] = useState<any[]>([])

  useEffect(() => {
    async function fetchData() {
      const data = await getAllTrustees()
      setTrustees(data.trustees)
    }

    fetchData()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {trustees.map((trustee, index) => (
        <Trustees
          key={index}
          image={trustee.image}
          name={trustee.name}
          role={trustee.role}
          description={trustee.description}
        />
      ))}
    </div>
  )
}
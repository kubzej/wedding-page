"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SeatingChart() {
  const [searchTerm, setSearchTerm] = useState("")

  // Simulovaná data pro zasedací pořádek
  const tables = [
    {
      id: 1,
      name: "Stůl 1 - Rodina nevěsty",
      guests: [
        "Anna Nováková",
        "Jan Novák",
        "Marie Nováková",
        "Petr Novák",
        "Kateřina Nováková",
        "Tomáš Novák",
        "Lucie Nováková",
        "Martin Novák",
      ],
    },
    {
      id: 2,
      name: "Stůl 2 - Rodina ženicha",
      guests: [
        "Eva Svobodová",
        "Jiří Svoboda",
        "Veronika Svobodová",
        "Michal Svoboda",
        "Zuzana Svobodová",
        "David Svoboda",
        "Barbora Svobodová",
        "Filip Svoboda",
      ],
    },
    {
      id: 3,
      name: "Stůl 3 - Přátelé nevěsty",
      guests: [
        "Tereza Černá",
        "Jakub Černý",
        "Monika Bílá",
        "Ondřej Bílý",
        "Petra Zelená",
        "Marek Zelený",
        "Nikola Modrá",
        "Adam Modrý",
      ],
    },
    {
      id: 4,
      name: "Stůl 4 - Přátelé ženicha",
      guests: [
        "Lenka Veselá",
        "Roman Veselý",
        "Simona Tichá",
        "Lukáš Tichý",
        "Martina Rychlá",
        "Patrik Rychlý",
        "Karolína Pomalá",
        "Vojtěch Pomalý",
      ],
    },
    {
      id: 5,
      name: "Stůl 5 - Kolegové",
      guests: [
        "Jana Krátká",
        "Pavel Krátký",
        "Ivana Dlouhá",
        "Radek Dlouhý",
        "Hana Široká",
        "Milan Široký",
        "Alena Úzká",
        "Josef Úzký",
      ],
    },
  ]

  // Filtrování hostů podle vyhledávání
  const filteredGuests = searchTerm
    ? tables
        .map((table) => ({
          ...table,
          guests: table.guests.filter((guest) => guest.toLowerCase().includes(searchTerm.toLowerCase())),
        }))
        .filter((table) => table.guests.length > 0)
    : tables

  return (
    <div>
      <div className="relative mb-6">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Hledat hosta..."
          className="pl-8 bg-[#f3ecd8]/30 border-[#cfb263]/20 focus:border-[#cfb263] focus:ring-[#cfb263]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Tabs defaultValue="tables" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-[#f3ecd8]/50">
          <TabsTrigger
            value="tables"
            className="text-sm font-light tracking-wide data-[state=active]:bg-[#cfb263] data-[state=active]:text-white"
          >
            Podle stolů
          </TabsTrigger>
          <TabsTrigger
            value="map"
            className="text-sm font-light tracking-wide data-[state=active]:bg-[#cfb263] data-[state=active]:text-white"
          >
            Mapa rozmístění
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tables" className="mt-6">
          <div className="space-y-6">
            {filteredGuests.map((table) => (
              <div key={table.id} className="border border-[#cfb263]/20 rounded-lg p-4 bg-[#f3ecd8]/30">
                <h3 className="font-medium mb-3">{table.name}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {table.guests.map((guest, index) => (
                    <div
                      key={index}
                      className={`p-2 rounded ${
                        searchTerm && guest.toLowerCase().includes(searchTerm.toLowerCase())
                          ? "bg-[#cfb263]/20"
                          : "bg-white/50"
                      }`}
                    >
                      {guest}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {filteredGuests.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">Žádní hosté nenalezeni</div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="map" className="mt-6">
          <div className="aspect-video relative bg-[#f3ecd8]/30 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-4 w-full max-w-2xl">
                {tables.map((table) => (
                  <div
                    key={table.id}
                    className="aspect-square rounded-md bg-white border-2 border-[#cfb263]/50 flex items-center justify-center shadow-md"
                  >
                    <div className="text-center">
                      <div className="font-medium text-sm">Stůl {table.id}</div>
                      <div className="text-xs text-muted-foreground">{table.guests.length} hostů</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg text-center text-sm">
              Interaktivní mapa rozmístění stolů bude k dispozici v den svatby
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

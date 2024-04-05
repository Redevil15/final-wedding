'use client';
import { FormPopover } from "@/components/form/form-popover"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react"
import { useAction } from "@/hooks/use-action";
import { fetchGuestList } from "@/actions/getGuestsList";
import { Trash2Icon } from "lucide-react";
import { deleteFamily } from "@/actions/delete-family";
import { toast } from "sonner";


interface FamilyListProps {
  data: any[]
}

export const FamilyList = ({
  data: initialData
}: FamilyListProps) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {

  }, [data])

  const { execute: executeFetchGuestList } = useAction(fetchGuestList, {

    onSuccess: (responseData: any) => {
      toast.success("Families list fetched");
      setData(responseData)
    },
    onError: (error: any) => {
      console.log('Error', error)
    }
  })

  const { execute } = useAction(deleteFamily, {
    onSuccess: (responseData: any) => {
      toast.success("Family deleted");
      handleGetFamiliesList()
    },
    onError: (error: any) => {
      console.log('Error deleting family', error)
    }
  })

  const handleGetFamiliesList = () => {
    executeFetchGuestList({});
  }

  const handleDeleteFamily = (id: string) => {
    execute({ id })
  }
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-2">
        {/* Show tne invited families */}
        {data.map((family) => (
          <div key={family.id_familia} className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-sm h-full w-full p-2 overflow-hidden">
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="relative font-semibold text-white">
              {family.nombre_familia}
            </p>
            <Button
              variant='destructive'
              onClick={() => handleDeleteFamily(family.id_familia)}
              id={family.id_familia}
              className="absolute top-2 right-2"
            >
              <Trash2Icon className="h-4 w-4" />
            </Button>
          </div>
        ))}

        <FormPopover
          side="right"
          sideOffset={10}
        >
          <div
            role="button"
            className="aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
          >
            <p className="text-sm">Invite Family</p>
          </div>
        </FormPopover>
      </div>
      <Button
        onClick={handleGetFamiliesList}
      >
        Get families list
      </Button>
    </div >
  )
}
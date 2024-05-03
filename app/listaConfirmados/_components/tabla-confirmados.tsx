"use client";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { useState, useMemo, useCallback } from "react";
import jsPDF from "jspdf";
import autotable from "jspdf-autotable";

interface InvitadoConfirmado {
  id_invitado: string;
  nombre_invitado: string;
  es_adulto: boolean;
  confirmed: boolean;
  id_familia: string;
}

interface TablaConfirmadosProps {
  confirmados: InvitadoConfirmado[];
}

export const TablaConfirmados = ({
  confirmados: initialConfirmados
}: TablaConfirmadosProps) => {

  const [confirmados, setConfirmados] = useState(initialConfirmados);
  const [searchName, setSearchName] = useState('');

  const confirmadosOrdenados = useMemo(() => {
    return confirmados
      .filter(invitado => invitado.nombre_invitado.toLowerCase().includes(searchName.toLowerCase()))
      .sort((a, b) => a.nombre_invitado.localeCompare(b.nombre_invitado));
  }, [confirmados, searchName]);

  const handleDelete = useCallback((id_invitado: string) => {
    setConfirmados(prev => prev.filter(invitado => invitado.id_invitado !== id_invitado))
  }, []);

  const generatePdf = () => {
    const doc = new jsPDF();

    const tableColumn = ["No.", "Nombre Invitado", "Adulto", "Confirmado"];
    const tableRows: any[] = [];

    confirmadosOrdenados.forEach((invitado, index) => {
      const invitadoData = [
        index + 1,
        invitado.nombre_invitado,
        invitado.es_adulto ? 'Sí' : 'No',
        invitado.confirmed ? 'Sí' : 'No'
      ];
      tableRows.push(invitadoData);
    });
    autotable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      theme: 'striped',
      styles: {
        font: 'helvetica',
        fontSize: 12,
        halign: 'center',
        cellPadding: 2,
      },
      headStyles: {
        fillColor: [182, 159, 107], // Example color: teal
        textColor: [255, 255, 255], // White color for text
        fontSize: 14,
      },
      columnStyles: {
        0: { cellWidth: 30 },
        1: { cellWidth: 80 },
        2: { cellWidth: 30 },
        3: { cellWidth: 40 },
      },
      margin: {
        top: 10
      },
    });

    doc.save('list-confirmados.pdf');
  };


  return (
    <div className="flex items-center flex-col justify-center pt-2">
      <div className="flex flex-col w-[60%] md:w-full items-center">
        <h2 className="text-center mb-4 text-yellow-800 font-semibold text-xl">
          Tabla de confirmadosss
        </h2>
        <div className="flex gap-4 w-full">
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="mb-4 px-4 py-2 border rounded-md"
          />
          <Button
            variant="default"
            onClick={generatePdf}
          >
            Generar PDF
          </Button>
        </div>
      </div>

      <div
        className="overflow-x-auto w-full flex max-h-[80vh] p-4 border border-yellow-800 rounded-xl"
      >
        <table
          className="table-auto"
          id="pdfTable"
        >
          <thead>
            <tr>
              <th className="px-4 py-2">No.</th>
              <th className="px-4 py-2">Nombre Invitado</th>
              <th className="px-4 py-2">Adulto</th>
              <th className="px-4 py-2">Confirmado</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {confirmadosOrdenados.map((invitado, index) => (
              <tr key={invitado.id_invitado}>
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2 text-center">{invitado.nombre_invitado}</td>
                <td className="border px-4 py-2 text-center">{invitado.es_adulto ? 'Sí' : 'No'}</td>
                <td className="border px-4 py-2 text-center">{invitado.confirmed ? 'Sí' : 'No'}</td>
                <td
                  className="border px-4 py-2 text-center"
                >
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(invitado.id_invitado)}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
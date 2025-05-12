import React from "react";

export interface Arzt {
  id: string;
  name: string;
  fachrichtung: string;
  verfuegbarkeit: string[];
}

export interface AerzteDemoProps {
  aerzte: Arzt[];
}

export default function AerzteDemo({ aerzte }: AerzteDemoProps) {
  return (
    <section>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="border border-gray-200 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="border border-gray-200 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fachrichtung</th>
              <th className="border border-gray-200 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verfügbarkeit</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {aerzte.length > 0 ? (
              aerzte.map((arzt) => (
                <tr key={arzt.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">{arzt.name}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">{arzt.fachrichtung}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">
                    {arzt.verfuegbarkeit.map((zeit, index) => (
                      <div key={index} className="mb-1 last:mb-0">
                        {zeit}
                      </div>
                    ))}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="border border-gray-200 px-4 py-4 text-center text-sm text-gray-500">
                  Keine Daten verfügbar
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
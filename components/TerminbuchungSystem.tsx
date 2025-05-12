"use client";

import { useState } from 'react';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface DaySchedule {
  date: string;
  dayName: string;
  slots: TimeSlot[];
}

interface Appointment {
  id: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  notes: string;
  confirmed: boolean;
}

export default function TerminbuchungSystem() {
  // States für Ansicht und Daten
  const [view, setView] = useState<'calendar' | 'booking' | 'confirmation' | 'admin'>('calendar');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerNotes, setCustomerNotes] = useState<string>('');
  const [bookingId, setBookingId] = useState<string>('');
  const [adminPassword, setAdminPassword] = useState<string>('');
  const [adminLoggedIn, setAdminLoggedIn] = useState<boolean>(false);
  
  // Demo-Daten für die Terminbuchung
  const services = [
    { id: 'beratung', name: 'Erstberatung', duration: 60, price: '89,00 €' },
    { id: 'folgeberatung', name: 'Folgeberatung', duration: 45, price: '69,00 €' },
    { id: 'express', name: 'Express-Beratung', duration: 30, price: '49,00 €' },
    { id: 'premium', name: 'Premium-Beratung', duration: 90, price: '129,00 €' }
  ];
  
  // Termine für die nächsten 14 Tage generieren
  const generateSchedule = (): DaySchedule[] => {
    const schedule: DaySchedule[] = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      
      // Wochenenden überspringen (nur Beispiel - könnte je nach Geschäftszeiten angepasst werden)
      if (currentDate.getDay() === 0 || currentDate.getDay() === 6) continue;
      
      const dateStr = currentDate.toISOString().split('T')[0];
      const dayNames = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
      const dayName = dayNames[currentDate.getDay()];
      
      // Termine generieren (9:00 - 17:00)
      const slots: TimeSlot[] = [];
      for (let hour = 9; hour < 17; hour++) {
        // Für jeden Stundenslot (9:00, 10:00, etc.)
        const timeStr = `${hour}:00`;
        const slotId = `${dateStr}-${timeStr}`;
        
        // Zufällig verfügbare Slots erzeugen (für Demo-Zwecke)
        const available = Math.random() > 0.3; // ca. 70% der Slots sind verfügbar
        
        slots.push({
          id: slotId,
          time: timeStr,
          available
        });
      }
      
      schedule.push({
        date: dateStr,
        dayName,
        slots
      });
    }
    
    return schedule;
  };
  
  // Demo-Terminplan
  const schedule = generateSchedule();
  
  // Demo-Termine
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 'appt-001',
      date: '2025-05-02',
      time: '10:00',
      name: 'Max Mustermann',
      email: 'max@example.com',
      phone: '0123456789',
      service: 'Erstberatung',
      notes: 'Erste Kontaktaufnahme',
      confirmed: true
    },
    {
      id: 'appt-002',
      date: '2025-05-03',
      time: '14:00',
      name: 'Julia Schmidt',
      email: 'julia@example.com',
      phone: '0987654321',
      service: 'Premium-Beratung',
      notes: 'Besondere Anforderungen besprechen',
      confirmed: true
    },
    {
      id: 'appt-003',
      date: '2025-05-05',
      time: '11:00',
      name: 'Thomas Weber',
      email: 'thomas@example.com',
      phone: '0123498765',
      service: 'Express-Beratung',
      notes: '',
      confirmed: false
    }
  ]);
  
  // Termin buchen
  const handleBookAppointment = () => {
    const newAppointment: Appointment = {
      id: `appt-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      date: selectedDate,
      time: selectedTime,
      name: customerName,
      email: customerEmail,
      phone: customerPhone,
      service: selectedService,
      notes: customerNotes,
      confirmed: false
    };
    
    setAppointments([...appointments, newAppointment]);
    setBookingId(newAppointment.id);
    setView('confirmation');
  };
  
  // Termin bestätigen oder absagen (Admin-Funktion)
  const handleConfirmAppointment = (id: string, confirmed: boolean) => {
    setAppointments(
      appointments.map(appointment => 
        appointment.id === id ? { ...appointment, confirmed } : appointment
      )
    );
  };
  
  // Termin löschen (Admin-Funktion)
  const handleDeleteAppointment = (id: string) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };
  
  // Admin-Login
  const handleAdminLogin = () => {
    // In einer echten Anwendung würde hier eine sichere Authentifizierung stattfinden
    if (adminPassword === 'admin123') {
      setAdminLoggedIn(true);
    } else {
      alert('Falsches Passwort');
    }
  };
  
  // Formatieren des Datums als dd.mm.yyyy
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('de-DE');
  };
  
  // Verschiedene Ansichten des Terminbuchungssystems
  const renderCalendarView = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Termin auswählen</h2>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Gewünschte Leistung</label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md bg-white"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="">Bitte wählen</option>
          {services.map(service => (
            <option key={service.id} value={service.name}>
              {service.name} ({service.duration} Min. - {service.price})
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Verfügbare Termine</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {schedule.map((day) => (
            <div key={day.date} className="border rounded-md p-4">
              <h4 className="font-medium mb-2">
                {day.dayName}, {formatDate(day.date)}
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {day.slots.map((slot) => (
                  <button
                    key={slot.id}
                    className={`py-2 px-3 text-sm rounded-md ${
                      selectedDate === day.date && selectedTime === slot.time
                        ? 'bg-indigo-600 text-white'
                        : slot.available
                        ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!slot.available}
                    onClick={() => {
                      setSelectedDate(day.date);
                      setSelectedTime(slot.time);
                    }}
                  >
                    {slot.time} Uhr
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setView('booking')}
          disabled={!selectedDate || !selectedTime || !selectedService}
          className={`px-6 py-3 rounded-md font-medium ${
            selectedDate && selectedTime && selectedService
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          Weiter zur Buchung
        </button>
      </div>
      
      <div className="mt-8 text-center">
        <button
          onClick={() => {
            setView('admin');
          }}
          className="text-sm text-gray-500 hover:text-indigo-600"
        >
          Admin-Bereich
        </button>
      </div>
    </div>
  );
  
  const renderBookingView = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Termindetails</h2>
      
      <div className="mb-8">
        <div className="bg-indigo-50 rounded-md p-4 mb-6">
          <h3 className="text-lg font-medium text-indigo-800 mb-2">Ihr ausgewählter Termin</h3>
          <p className="text-indigo-700">
            <span className="font-medium">{selectedService}</span><br />
            am <span className="font-medium">{formatDate(selectedDate)}</span> um <span className="font-medium">{selectedTime} Uhr</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Anmerkungen (optional)</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={3}
            value={customerNotes}
            onChange={(e) => setCustomerNotes(e.target.value)}
          ></textarea>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button
          onClick={() => setView('calendar')}
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 font-medium"
        >
          Zurück
        </button>
        <button
          onClick={handleBookAppointment}
          disabled={!customerName || !customerEmail || !customerPhone}
          className={`px-6 py-3 rounded-md font-medium ${
            customerName && customerEmail && customerPhone
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          Termin verbindlich buchen
        </button>
      </div>
    </div>
  );
  
  const renderConfirmationView = () => (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vielen Dank für Ihre Buchung!</h2>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          Ihre Terminanfrage wurde erfolgreich übermittelt. Sie erhalten in Kürze eine Bestätigungsmail.
        </p>
        
        <div className="bg-gray-50 rounded-md p-4 mb-6 max-w-sm mx-auto">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Ihre Buchungsdetails</h3>
          <p className="text-gray-700 text-sm">
            <span className="block"><strong>Buchungsnummer:</strong> {bookingId}</span>
            <span className="block"><strong>Termin:</strong> {formatDate(selectedDate)} um {selectedTime} Uhr</span>
            <span className="block"><strong>Leistung:</strong> {selectedService}</span>
          </p>
        </div>
      </div>
      
      <button
        onClick={() => {
          // Zurücksetzen der Formulardaten
          setSelectedDate('');
          setSelectedTime('');
          setSelectedService('');
          setCustomerName('');
          setCustomerEmail('');
          setCustomerPhone('');
          setCustomerNotes('');
          setBookingId('');
          setView('calendar');
        }}
        className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium"
      >
        Zur Startseite zurückkehren
      </button>
    </div>
  );
  
  const renderAdminView = () => {
    if (!adminLoggedIn) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Admin-Login</h2>
          
          <div className="mb-6 max-w-md mx-auto">
            <label className="block text-sm font-medium text-gray-700 mb-1">Passwort</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
            />
            <p className="text-sm text-gray-500 mt-1">Für die Demo: "admin123"</p>
          </div>
          
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setView('calendar')}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 font-medium"
            >
              Zurück
            </button>
            <button
              onClick={handleAdminLogin}
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium"
            >
              Einloggen
            </button>
          </div>
        </div>
      );
    }
    
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Admin-Dashboard</h2>
          <div>
            <button
              onClick={() => {
                setAdminLoggedIn(false);
                setAdminPassword('');
                setView('calendar');
              }}
              className="text-sm text-gray-500 hover:text-red-600"
            >
              Ausloggen
            </button>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Offene Terminanfragen</h3>
          
          {appointments.filter(a => !a.confirmed).length === 0 ? (
            <p className="text-gray-500 italic">Keine offenen Anfragen vorhanden.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datum/Zeit</th>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kunde</th>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leistung</th>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {appointments
                    .filter(appointment => !appointment.confirmed)
                    .map(appointment => (
                      <tr key={appointment.id}>
                        <td className="py-3 px-3 text-sm">
                          {formatDate(appointment.date)}<br />
                          {appointment.time} Uhr
                        </td>
                        <td className="py-3 px-3 text-sm">
                          <span className="font-medium">{appointment.name}</span><br />
                          {appointment.email}<br />
                          {appointment.phone}
                        </td>
                        <td className="py-3 px-3 text-sm">{appointment.service}</td>
                        <td className="py-3 px-3 text-sm">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleConfirmAppointment(appointment.id, true)}
                              className="px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-600 hover:text-white"
                            >
                              Bestätigen
                            </button>
                            <button
                              onClick={() => handleDeleteAppointment(appointment.id)}
                              className="px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-600 hover:text-white"
                            >
                              Ablehnen
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Bestätigte Termine</h3>
          
          {appointments.filter(a => a.confirmed).length === 0 ? (
            <p className="text-gray-500 italic">Keine bestätigten Termine vorhanden.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datum/Zeit</th>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kunde</th>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leistung</th>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {appointments
                    .filter(appointment => appointment.confirmed)
                    .map(appointment => (
                      <tr key={appointment.id}>
                        <td className="py-3 px-3 text-sm">
                          {formatDate(appointment.date)}<br />
                          {appointment.time} Uhr
                        </td>
                        <td className="py-3 px-3 text-sm">
                          <span className="font-medium">{appointment.name}</span><br />
                          {appointment.email}<br />
                          {appointment.phone}
                        </td>
                        <td className="py-3 px-3 text-sm">{appointment.service}</td>
                        <td className="py-3 px-3 text-sm">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleDeleteAppointment(appointment.id)}
                              className="px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-600 hover:text-white"
                            >
                              Löschen
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  // Hauptansicht je nach ausgewähltem View
  return (
    <>
      {view === 'calendar' && renderCalendarView()}
      {view === 'booking' && renderBookingView()}
      {view === 'confirmation' && renderConfirmationView()}
      {view === 'admin' && renderAdminView()}
    </>
  );
}
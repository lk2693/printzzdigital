"use client";

import { useState, useEffect } from 'react';
import { 
  ArrowUp, ArrowDown,
  Users, ShoppingCart, 
  CreditCard, TrendingUp,
  Bell, Settings, Download, 
  Filter, Briefcase, Search,
  Calendar, ChevronDown, 
  Clock, Activity
} from 'lucide-react';

export default function ProfessionalDashboardSystem() {
  // Demo-Daten für KPIs
  const [kpiData, setKpiData] = useState({
    revenue: { value: 24850, change: 12.5, trend: 'up' },
    orders: { value: 356, change: 8.3, trend: 'up' },
    customers: { value: 89, change: 5.2, trend: 'up' },
    averageOrder: { value: 69.8, change: 3.4, trend: 'up' }
  });
  
  // Demo-Daten für Bestellungen
  const [recentOrders, setRecentOrders] = useState([
    { id: 'ORD-2305', customer: 'Stefan Müller', date: '15.06.2025', amount: 349.99, status: 'Bezahlt', product: 'Website-Relaunch' },
    { id: 'ORD-2304', customer: 'Laura Schmidt', date: '14.06.2025', amount: 129.50, status: 'Bezahlt', product: 'Logo-Design' },
    { id: 'ORD-2303', customer: 'Thomas Weber', date: '13.06.2025', amount: 89.00, status: 'Ausstehend', product: 'Social Media Paket' }
  ]);
  
  // Demo-Daten für Umsatzverteilung
  const [revenueDistribution, setRevenueDistribution] = useState([
    { category: 'Website-Entwicklung', value: 45, color: 'bg-indigo-500' },
    { category: 'Print-Design', value: 25, color: 'bg-blue-500' },
    { category: 'Branding', value: 18, color: 'bg-purple-500' },
    { category: 'Marketing', value: 12, color: 'bg-pink-500' }
  ]);
  
  // Demo-Daten für Umsatzverlauf
  const [revenueHistory, setRevenueHistory] = useState([
    { month: 'Jan', value: 18500 },
    { month: 'Feb', value: 16800 },
    { month: 'Mär', value: 19200 },
    { month: 'Apr', value: 21500 },
    { month: 'Mai', value: 22100 },
    { month: 'Jun', value: 24850 }
  ]);
  
  // State für aktive Tabs und Filter
  const [activePeriod, setActivePeriod] = useState('month');
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Formatierung von Zahlen als Euro-Betrag
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
  };
  
  // Simuliert das Laden von Daten basierend auf dem ausgewählten Zeitraum
  useEffect(() => {
    // In einer echten Anwendung würde hier ein API-Call stattfinden
    updateDataByPeriod(activePeriod);
  }, [activePeriod]);
  
  // Daten basierend auf dem ausgewählten Zeitraum aktualisieren
  const updateDataByPeriod = (period: string): void => {
    if (period === 'week') {
      setKpiData({
        revenue: { value: 5980, change: 15.2, trend: 'up' },
        orders: { value: 87, change: 12.1, trend: 'up' },
        customers: { value: 24, change: 8.7, trend: 'up' },
        averageOrder: { value: 68.7, change: 3.4, trend: 'up' }
      });
      
      setRevenueHistory([
        { month: 'Mo', value: 850 },
        { month: 'Di', value: 920 },
        { month: 'Mi', value: 880 },
        { month: 'Do', value: 1150 },
        { month: 'Fr', value: 1280 },
        { month: 'Sa', value: 900 }
      ]);
    } 
    else if (period === 'quarter') {
      setKpiData({
        revenue: { value: 72450, change: 18.9, trend: 'up' },
        orders: { value: 1025, change: 15.7, trend: 'up' },
        customers: { value: 245, change: 22.5, trend: 'up' },
        averageOrder: { value: 70.7, change: 2.8, trend: 'up' }
      });
      
      setRevenueHistory([
        { month: 'Jan', value: 18500 },
        { month: 'Feb', value: 16800 },
        { month: 'Mär', value: 19200 },
        { month: 'Apr', value: 21500 },
        { month: 'Mai', value: 22100 },
        { month: 'Jun', value: 24850 }
      ]);
    }
    else if (period === 'year') {
      setKpiData({
        revenue: { value: 289700, change: 25.4, trend: 'up' },
        orders: { value: 4250, change: 22.8, trend: 'up' },
        customers: { value: 857, change: 35.2, trend: 'up' },
        averageOrder: { value: 68.2, change: 1.5, trend: 'up' }
      });
      
      setRevenueHistory([
        { month: 'Jan', value: 18500 },
        { month: 'Feb', value: 16800 },
        { month: 'Mär', value: 19200 },
        { month: 'Apr', value: 21500 },
        { month: 'Mai', value: 22100 },
        { month: 'Jun', value: 24850 },
        { month: 'Jul', value: 26200 },
        { month: 'Aug', value: 24900 },
        { month: 'Sep', value: 28500 },
        { month: 'Okt', value: 32500 },
        { month: 'Nov', value: 27800 },
        { month: 'Dez', value: 26850 }
      ]);
    }
    else {
      // Standard: Monat
      setKpiData({
        revenue: { value: 24850, change: 12.5, trend: 'up' },
        orders: { value: 356, change: 8.3, trend: 'up' },
        customers: { value: 89, change: 5.2, trend: 'up' },
        averageOrder: { value: 69.8, change: 3.4, trend: 'up' }
      });
      
      setRevenueHistory([
        { month: '01', value: 3950 },
        { month: '06', value: 4280 },
        { month: '11', value: 3800 },
        { month: '16', value: 4120 },
        { month: '21', value: 4350 },
        { month: '26', value: 4350 }
      ]);
    }
  };
  
  // Maximalen Wert für die Skalierung des Charts finden
  const maxRevenueValue = Math.max(...revenueHistory.map(item => item.value)) * 1.1;
  
  // Dummy-Handler für Interaktionen
  const handleDownload = () => {
    alert('Bericht wird heruntergeladen...');
  };
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Suche nach: ${searchQuery}`);
  };
  
  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    if (notifications > 0) {
      setNotifications(0);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      {/* Dashboard Header */}
      <div className="bg-indigo-700 text-white p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">Business Dashboard</h2>
            <p className="text-indigo-200 text-sm mt-1">Alle wichtigen Kennzahlen auf einen Blick</p>
          </div>
          
          <div className="flex items-center mt-4 sm:mt-0">
            {/* Suchfeld */}
            <form onSubmit={handleSearch} className="relative mr-4 hidden md:block">
              <input 
                type="text" 
                className="bg-indigo-600 text-white placeholder-indigo-300 text-sm rounded-md pl-9 pr-4 py-2 w-40 focus:w-56 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                placeholder="Suchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="w-4 h-4 text-indigo-300 absolute left-3 top-2.5" />
            </form>
            
            {/* Benachrichtigungsglocke mit Counter */}
            <div className="relative">
              <button 
                className="p-2 rounded-full hover:bg-indigo-600 mr-3 relative"
                onClick={handleNotificationClick}
              >
                <Bell className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              
              {/* Benachrichtigungs-Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-20">
                  <div className="py-2 px-3 bg-gray-50 border-b">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-semibold text-gray-700">Benachrichtigungen</h3>
                      <span className="text-xs text-gray-500">3 neue</span>
                    </div>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    <div className="py-2 px-3 border-b hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 pt-1">
                          <span className="bg-green-100 text-green-600 p-1 rounded-full">
                            <ShoppingCart className="w-3 h-3" />
                          </span>
                        </div>
                        <div className="ml-3 w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">Neue Bestellung: ORD-2305</p>
                          <p className="text-xs text-gray-500">Vor 35 Minuten</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-2 px-3 border-b hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 pt-1">
                          <span className="bg-blue-100 text-blue-600 p-1 rounded-full">
                            <Users className="w-3 h-3" />
                          </span>
                        </div>
                        <div className="ml-3 w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">Neuer Kunde: Laura Schmidt</p>
                          <p className="text-xs text-gray-500">Vor 2 Stunden</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-2 px-3 hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 pt-1">
                          <span className="bg-yellow-100 text-yellow-600 p-1 rounded-full">
                            <Activity className="w-3 h-3" />
                          </span>
                        </div>
                        <div className="ml-3 w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">Umsatzziel erreicht: 25.000€</p>
                          <p className="text-xs text-gray-500">Vor 5 Stunden</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-2 px-3 bg-gray-50 text-center border-t">
                    <button className="text-xs text-indigo-600 font-medium hover:text-indigo-800">
                      Alle Benachrichtigungen anzeigen
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Einstellungen-Icon */}
            <button className="p-2 rounded-full hover:bg-indigo-600 mr-4">
              <Settings className="w-5 h-5" />
            </button>
            
            {/* Benutzerprofil */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-2">
                <span className="font-medium text-sm">MM</span>
              </div>
              <div className="hidden md:block">
                <span className="text-sm font-medium block leading-tight">Max Mustermann</span>
                <span className="text-xs text-indigo-200">Administrator</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Tabs */}
          <div className="flex space-x-1 overflow-x-auto pb-2 mb-4 md:mb-0 w-full md:w-auto">
            <button 
              className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${activeTab === 'overview' ? 'bg-white text-indigo-700' : 'text-indigo-100 hover:bg-indigo-600'}`}
              onClick={() => setActiveTab('overview')}
            >
              Übersicht
            </button>
            <button 
              className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${activeTab === 'sales' ? 'bg-white text-indigo-700' : 'text-indigo-100 hover:bg-indigo-600'}`}
              onClick={() => setActiveTab('sales')}
            >
              Verkäufe
            </button>
            <button 
              className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${activeTab === 'customers' ? 'bg-white text-indigo-700' : 'text-indigo-100 hover:bg-indigo-600'}`}
              onClick={() => setActiveTab('customers')}
            >
              Kunden
            </button>
            <button 
              className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${activeTab === 'products' ? 'bg-white text-indigo-700' : 'text-indigo-100 hover:bg-indigo-600'}`}
              onClick={() => setActiveTab('products')}
            >
              Produkte
            </button>
          </div>
          
          {/* Zeitraumfilter */}
          <div className="flex space-x-2 w-full md:w-auto justify-between md:justify-start">
            <button 
              className={`px-3 py-2 rounded-md text-xs font-medium transition-colors ${activePeriod === 'week' ? 'bg-white text-indigo-700' : 'bg-indigo-600 text-indigo-100 hover:bg-indigo-500'}`}
              onClick={() => setActivePeriod('week')}
            >
              Woche
            </button>
            <button 
              className={`px-3 py-2 rounded-md text-xs font-medium transition-colors ${activePeriod === 'month' ? 'bg-white text-indigo-700' : 'bg-indigo-600 text-indigo-100 hover:bg-indigo-500'}`}
              onClick={() => setActivePeriod('month')}
            >
              Monat
            </button>
            <button 
              className={`px-3 py-2 rounded-md text-xs font-medium transition-colors ${activePeriod === 'quarter' ? 'bg-white text-indigo-700' : 'bg-indigo-600 text-indigo-100 hover:bg-indigo-500'}`}
              onClick={() => setActivePeriod('quarter')}
            >
              Quartal
            </button>
            <button 
              className={`px-3 py-2 rounded-md text-xs font-medium transition-colors ${activePeriod === 'year' ? 'bg-white text-indigo-700' : 'bg-indigo-600 text-indigo-100 hover:bg-indigo-500'}`}
              onClick={() => setActivePeriod('year')}
            >
              Jahr
            </button>
          </div>
        </div>
      </div>
      
      {/* Dashboard Content */}
      <div className="p-4 sm:p-6 bg-gray-50">
        {/* KPI-Karten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Umsatz KPI */}
          <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm font-medium text-gray-500">Umsatz</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{formatCurrency(kpiData.revenue.value)}</h3>
              </div>
              <div className={`p-2 rounded-full ${kpiData.revenue.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <div className={`text-sm flex items-center ${kpiData.revenue.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {kpiData.revenue.trend === 'up' ? 
                <ArrowUp className="w-4 h-4 mr-1" /> : 
                <ArrowDown className="w-4 h-4 mr-1" />
              }
              <span className="font-medium">{kpiData.revenue.change}% </span>
              <span className="text-gray-500 ml-1">seit letztem {activePeriod}</span>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {activePeriod === 'week' ? 'Diese Woche' : 
                   activePeriod === 'month' ? 'Dieser Monat' : 
                   activePeriod === 'quarter' ? 'Dieses Quartal' : 'Dieses Jahr'}
                </span>
                <button className="text-indigo-600 hover:text-indigo-800">Details</button>
              </div>
            </div>
          </div>
          
          {/* Bestellungen KPI */}
          <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm font-medium text-gray-500">Bestellungen</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{kpiData.orders.value}</h3>
              </div>
              <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                <ShoppingCart className="w-5 h-5" />
              </div>
            </div>
            <div className="text-sm flex items-center text-green-600">
              <ArrowUp className="w-4 h-4 mr-1" />
              <span className="font-medium">{kpiData.orders.change}% </span>
              <span className="text-gray-500 ml-1">seit letztem {activePeriod}</span>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  Ø Bearbeitungszeit: 1.2 Tage
                </span>
                <button className="text-indigo-600 hover:text-indigo-800">Details</button>
              </div>
            </div>
          </div>
          
          {/* Neukunden KPI */}
          <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm font-medium text-gray-500">Neukunden</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{kpiData.customers.value}</h3>
              </div>
              <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="text-sm flex items-center text-green-600">
              <ArrowUp className="w-4 h-4 mr-1" />
              <span className="font-medium">{kpiData.customers.change}% </span>
              <span className="text-gray-500 ml-1">seit letztem {activePeriod}</span>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span className="flex items-center">
                  <Activity className="w-3 h-3 mr-1" />
                  Kunden-Wachstumsrate
                </span>
                <button className="text-indigo-600 hover:text-indigo-800">Details</button>
              </div>
            </div>
          </div>
          
          {/* Durchschnittlicher Bestellwert KPI */}
          <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm font-medium text-gray-500">Ø Bestellwert</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{formatCurrency(kpiData.averageOrder.value)}</h3>
              </div>
              <div className="p-2 rounded-full bg-teal-100 text-teal-600">
                <CreditCard className="w-5 h-5" />
              </div>
            </div>
            <div className="text-sm flex items-center text-green-600">
              <ArrowUp className="w-4 h-4 mr-1" />
              <span className="font-medium">{kpiData.averageOrder.change}% </span>
              <span className="text-gray-500 ml-1">seit letztem {activePeriod}</span>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span className="flex items-center">
                  <Briefcase className="w-3 h-3 mr-1" />
                  Höchster Wert: {formatCurrency(349.99)}
                </span>
                <button className="text-indigo-600 hover:text-indigo-800">Details</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Grafiken und Tabellen */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Umsatzdiagramm */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Umsatzentwicklung</h3>
              <div className="flex space-x-2">
                <button 
                  onClick={handleDownload}
                  className="p-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded transition-colors"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded transition-colors">
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Balkendiagramm */}
            <div className="mt-2 h-64 flex items-end space-x-2">
              {revenueHistory.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center group">
                  <div className="relative w-full">
                    <div 
                      className="w-full bg-indigo-500 rounded-t group-hover:bg-indigo-600 transition-all duration-300"
                      style={{ height: `${(item.value / maxRevenueValue) * 100}%` }}
                    >
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {formatCurrency(item.value)}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs mt-2 text-gray-600 font-medium">{item.month}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Umsatz nach Kategorie */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Umsatz nach Kategorie</h3>
              <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            
            <div className="mt-4 space-y-4">
              {revenueDistribution.map((category, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">{category.category}</span>
                    <span className="text-sm font-medium text-gray-900">{category.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className={`h-2.5 rounded-full ${category.color}`}
                      style={{ width: `${category.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-md text-sm font-medium transition-colors">
                Vollständige Analyse anzeigen
              </button>
            </div>
          </div>
        </div>
        
        {/* Letzte Bestellungen Tabelle */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Neueste Bestellungen</h3>
            <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              Alle anzeigen
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bestellnr.
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kunde
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Produkt
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Datum
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Betrag
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentOrders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.product}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                      {formatCurrency(order.amount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === 'Bezahlt' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Tabellen-Footer mit Pagination */}
          <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t">
            <div className="flex-1 flex justify-between sm:hidden">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Zurück
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Weiter
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Zeige <span className="font-medium">1</span> bis <span className="font-medium">3</span> von <span className="font-medium">12</span> Einträgen
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Zurück</span>
                    &laquo;
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-indigo-500 bg-indigo-50 text-sm font-medium text-indigo-600">
                    1
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    4
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Weiter</span>
                    &raquo;
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dashboard Footer */}
      <div className="bg-white px-4 py-4 text-sm text-gray-500 border-t flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-2 sm:mb-0">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          <span>Letzte Aktualisierung: 15.06.2025, 14:32 Uhr</span>
        </div>
        <div className="flex space-x-4">
          <button className="text-gray-500 hover:text-indigo-600 transition-colors text-xs flex items-center">
            <Download className="w-3 h-3 mr-1" />
            Bericht exportieren
          </button>
          <button className="text-gray-500 hover:text-indigo-600 transition-colors text-xs flex items-center">
            <Filter className="w-3 h-3 mr-1" />
            Filter anpassen
          </button>
          <button onClick={handleDownload} className="text-gray-500 hover:text-indigo-600 transition-colors text-xs flex items-center">
            <Settings className="w-3 h-3 mr-1" />
            Einstellungen
          </button>
        </div>
      </div>
    </div>
  );
}
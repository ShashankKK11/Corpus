import React, { useState } from 'react';
import { AppProvider } from './contexts/AppContext';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import CorpusManager from './components/CorpusManager';
import ContactManager from './components/ContactManager';
import CampaignManager from './components/CampaignManager';
import AIInsights from './components/AIInsights';
import Analytics from './components/Analytics';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'corpus':
        return <CorpusManager />;
      case 'contacts':
        return <ContactManager />;
      case 'campaigns':
        return <CampaignManager />;
      case 'insights':
        return <AIInsights />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return (
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Settings</h1>
            <p className="text-gray-600">Settings page coming soon...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppProvider>
      <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
        {renderCurrentPage()}
      </Layout>
    </AppProvider>
  );
}

export default App;

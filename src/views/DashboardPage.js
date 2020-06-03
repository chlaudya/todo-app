import React, { useState } from 'react';
import HeaderDashboard from '../components/HeaderDashboard';
import TodoDashboard from '../components/dashboard/TodoDashboard';

function DashboardPage() {

    return (
        <div>
            <HeaderDashboard />
            <TodoDashboard />
        </div>

    )
}

export default DashboardPage;
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
 
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <a href="index.html" target="_blank" rel="noopener noreferrer">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-10">
                            <div className="p-6 text-gray-900">View / Edit Products</div>
                        </div>
                    </a>
                    <div className="bg-green-300 overflow-hidden shadow-sm sm:rounded-lg mb-10">
                        <div className="p-6 text-gray-900">Open Cafe</div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Close Cafe</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

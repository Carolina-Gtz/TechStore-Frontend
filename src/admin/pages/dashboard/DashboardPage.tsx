import ActivityFeed from "@/admin/components/ActivityFeed"
import { AdminTitle } from "@/admin/components/AdminTitle"
import Chart from "@/admin/components/Chart"
import QuickActions from "@/admin/components/QuickActions"
import StatCard from "@/admin/components/StatCard"
import { chartData, performanceData, stats } from "@/data/DashboardData"

export const DashboardPage = () => {

    return (
        <div>
            {/* Seccion */}
            <AdminTitle title="Panel Administrativo" subtitle="Aqui puedes ver el estado de tu negocio" />

            {/* Sección de gráficos y actividades */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2 space-y-6">
                    <Chart title="Tráfico" data={chartData} />
                    <Chart title="Métricas de rendimiento" data={performanceData} />
                </div>

                <div className="space-y-6">
                    <ActivityFeed />
                    <QuickActions />
                </div>
            </div>
            {/* Estadísticas*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>


        </div>
    )
}

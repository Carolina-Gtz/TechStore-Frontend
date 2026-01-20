import { DollarSign, ShoppingCart, User, Users } from "lucide-react";

export const activitiesLog = [
    {
        icon: User,
        title: 'Nuevo usuario registrado',
        description: 'Sarah Gomez se unió a la plataforma',
        time: 'Hace 2 minutos',
        color: 'bg-blue-500'
    },
    {
        icon: ShoppingCart,
        title: 'Nuevo pedido recibido',
        description: 'Orden #12847 por valor de $299.990',
        time: 'Hace 5 minutos',
        color: 'bg-green-500'
    },

];

export const stats = [
    {
        title: 'Total de usuarios',
        value: '4,567',
        change: '+12.5% del mes pasado',
        changeType: 'positive' as const,
        icon: Users,
        color: 'bg-blue-500'
    },
    {
        title: 'Ingresos',
        value: '$84.230',
        change: '+8.2% del mes pasado',
        changeType: 'positive' as const,
        icon: DollarSign,
        color: 'bg-green-500'
    },
    {
        title: 'Pedidos',

        value: '1.429',
        change: '-2.4% del mes pasado',
        changeType: 'negative' as const,
        icon: ShoppingCart,
        color: 'bg-purple-500'
    },

];

export const chartData = [
    { label: 'Salud', value: 62 },
    { label: 'Moda ', value: 56 },
    { label: 'Accesorios', value: 34 },
    { label: 'Tecnologia', value: 33 },
    { label: 'Hogar', value: 27 },
];

export const performanceData = [
    { label: 'Visitas de página', value: 24567 },
    { label: 'Sesiones', value: 18234 },
];
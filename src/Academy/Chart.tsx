import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, PieLabelRenderProps } from 'recharts';
interface ChildProp {
    anyties: {
        totalClasses: number,
        readCount: number,
        unreadCount: number,
        readPercentage: string,
        unreadPercentage: string,
    } | undefined

}
const Chart = ({ anyties }: ChildProp): React.JSX.Element => {
    const data = [
        { name: 'Complete', value: anyties?.readCount },
        { name: 'Incomplete', value: anyties?.unreadCount }
    ];

    const COLORS = ['#905A00', '#ffffff'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: PieLabelRenderProps) => {
        const radius = (innerRadius as number) + ((outerRadius as number) - (innerRadius as number)) * 0.5;
        const x = (cx as number) + radius * Math.cos(-midAngle * RADIAN);
        const y = (cy as number) + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > (cx as number) ? 'start' : 'end'} dominantBaseline="central">
                {`${((percent as number) * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className='relative w-full h-[80%]'>
            {/* {
                anyties?.readPercentage.startsWith('100') ? <div className='absolute top-[50%] left-[50%] translate-x-[-50%] text-white translate-y-[-50%] p-[70px] py-[80px] text-center rounded-full bg-[#905A00]'>
                    100%
                </div> : <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={150} height={150}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {
                                data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            } */}
        </div>

    )
}

export default Chart;
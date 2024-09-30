const Personal = ({icons}) => {
    return (
        <ul className="flex">
            {
                icons.map((item, index) => (
                    <li key={index}>
                        <item.icon className={`h-12 w-12 p-2`}/>
                    </li>
                ))
            }
        </ul>
    );
}

export default Personal

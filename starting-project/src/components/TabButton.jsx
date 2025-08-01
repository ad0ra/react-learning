export default function TabButton({children, isSelected, ...props}) {
    // console.log('Tab button component executing');
    return (
    <li>
        <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
    </li>);
}
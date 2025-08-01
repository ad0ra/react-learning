export default function Tabs({children, buttons, ButtonsContainer = 'menu'}) {
    //menu is default value for ButtonsContainer prop
    // const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}
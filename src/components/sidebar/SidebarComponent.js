import React from 'react';
import { Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import LogoComponent from './LogoComponent';
import MenuItemComponent from './MenuItemComponent';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#363740',
        width: 255,
        paddingTop: 32
    },
    menuItemList: {
        marginTop: 52
    },
    separator: {
        borderTop: '1px solid #DFE0EB',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent(props) {
    return (
        <Column className={css(styles.container)}>
            <LogoComponent />
            <Column className={css(styles.menuItemList)}>
                <MenuItemComponent
                    title="Algorithms" 
                    onClick={() => props.onChange('Algorithms')}
                    active={props.selectedItem === 'Algorithms'}
                />
                <MenuItemComponent
                    title="Step By Step"
                    onClick={() => props.onChange('Tickets')}
                    active={props.selectedItem === 'Tickets'}
                />
                <MenuItemComponent
                    title="Glossary"
                    onClick={() => props.onChange('Glossary')}
                    active={props.selectedItem === 'Glossary'} />
                <div className={css(styles.separator)}></div>
                <MenuItemComponent
                    title="About Us"
                    onClick={() => props.onChange('About Us')}
                    active={props.selectedItem === 'About Us'} />
            </Column>
        </Column>
    );
}

export default SidebarComponent;
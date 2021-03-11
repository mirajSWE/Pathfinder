import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    container: {
        marginLeft: 30,
        marginRight: 32
    },
    title: {
        fontFamily: 'Dancing Script',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 45,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        color: '#ff3399',
        opacity: 0.7
        // marginLeft: 12
    }
});

function LogoComponent() {
    return (
        <Row className={css(styles.container)} horizontal="center" vertical="center">
          <span className={css(styles.title)}>Pathfinder</span>
        </Row>
    );
}

export default LogoComponent;
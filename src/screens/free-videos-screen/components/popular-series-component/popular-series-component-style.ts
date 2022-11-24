import colors from '@theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    component: {
        borderRadius: 0,
        padding: 15,
        elevation: 0,
    },
    headingText: {
        fontWeight: '700',
    },
    imageComponent: {
        position: 'relative',
    },
    playIcon_component: {

        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
    },
    playIcon_inner_component: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: colors.gray_scale.white,
        borderRadius: 10,
        alignItems: 'center',
    },
    card_component: {
        borderWidth: 0.8,
        borderColor: '#E0DACB',
        elevation: 0,
        padding: 0,
        width: 235,
        marginRight: 10,
    },
    liveClassTextComponent: {
        alignSelf: 'flex-start',
        paddingHorizontal: 3,
        borderRadius: 3,
        marginTop: 10,
        backgroundColor: '#FEEEEF'
    },
});
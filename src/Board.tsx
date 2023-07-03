import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import Background from './Background'
import { Chess } from 'chess.js';

const { width } = Dimensions.get("window");


const styles = StyleSheet.create({
    container: {
        width,
        height: width,
    }
})

const useConst = <T,>(initialValue: T | (() => T)): T => {
    const ref = useRef<{ value: T }>();
    if (ref.current === undefined) {

    }
}



export default function Board() {

    const chess = useConst(() => new Chess());
    return (
        <View style={styles.container}>
            <Background />
        </View>
    )
}
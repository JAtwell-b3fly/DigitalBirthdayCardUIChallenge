import react from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Cover = () => {

    const navigation = useNavigation();

    return(
        <View style={styles.main}>
            <View style={styles.frame_div}>
                <Image 
                    source={require("../images/frame.jpg")}
                    style={styles.flower_frame}
                />
            </View>

            <View style={styles.content}>
                <View style={styles.balloon_div1}>
                    <Image
                        style={styles.balloon_img1}
                        source={require("../images/balloonsright.png")}
                    />
                </View>

                <View style={styles.balloon_div2}>
                    <Image
                        style={styles.balloon_img2}
                        source={require("../images/balloons.png")}
                    />
                </View>

                <View style={styles.happy_div}>
                    <Text style={styles.happy}>Happy Birthday Lyn Lapid!!!</Text>
                </View>
                
                <View style={styles.polaroid}>
                    <Image
                        source={require("../images/lapid.jpg")}
                        style={styles.polaroid_img}
                    />
                </View>

                <TouchableOpacity style={styles.arrow_btn} onPress={() => navigation.navigate("Video")}>
                    <Image
                        style={styles.arrow}
                        source={require("../images/right-arrow.png")}
                    />
                </TouchableOpacity>

                <View style={styles.age_div}>
                    <Text style={styles.age}>21</Text>
                </View>

                <View style={styles.hearts_div}>
                    <Image
                        style={styles.hearts}
                        source={require("../images/love.png")}
                    />
                </View>
                <View style={styles.hearts_div2}>
                    <Image
                        style={styles.hearts}
                        source={require("../images/love.png")}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex:1,
    },
    frame_div: {
        position: "relative",
        left: 1,
        top: 1,
    },
    flower_frame: {
       width: 420,
       height: 870, 
    },
    content: {
        zIndex: 1,
        position: "absolute",
        top: 20,
        bottom: 20,
        left: 20,
    },
    happy_div: {
        width: 270,
        height: 300,
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: 50,
        padding: 15,
        zIndex: 1,
        position:"absolute",
        left: 70,
        top: 40
    },
    happy: {
        fontSize: 45,
        fontWeight: "bold",
        textAlign: "center"
    },
    age_div: {
        width: 250,
        height: 230,
        backgroundColor: "rgba(255,255,255,0.0)",
        borderRadius: 50,
        padding: 20,
        zIndex: 1,
        position:"absolute",
        left: 70,
        top: 520
    },
    age: {
        fontSize: 120,
        fontWeight: "bold",
        textAlign: "center",
    },
    polaroid: {
        zIndex: 1,
        position: "absolute",
        backgroundColor: "rgba(255,255,255,255)",
        width: 263,
        height: 320,
        left: 70,
        top: 300,
    },
    polaroid_img: {
        width:234,
        height: 245,
        zIndex: 1,
        position: "relative",
        left: 15,
        top: 15,
    },
    arrow_btn: {
        zIndex: 1,
        position: "absolute",
        left: 270,
        top: 350,
    },
    arrow: {
        width: 110,
        height: 110,
        zIndex: 1,
        position: "relative",
    },
    hearts_div: {
        zIndex: 1,
        position: "absolute",
        left: -55,
        top: 670,
    },
    hearts_div2: {
        zIndex: 1,
        position: "absolute",
        left: 170,
        top: 670,
    },
    hearts: {
        width: 219,
        height: 185,
    },
    balloon_div1: {
        zIndex: 1,
        position: "absolute",
        left: -10,
        top: 10,
    },
    balloon_div2: {
        zIndex: 1,
        position: "absolute",
        left: 260,
        top: 10,
    },
    balloon_img1: {
        width: 137,
        height: 137,
    },
    balloon_img2: {
        width: 137,
        height: 137,
    }
});

export default Cover;

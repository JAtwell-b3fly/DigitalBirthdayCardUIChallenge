import react from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Video }  from "expo-av";

const VideoScreen = () => {
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
                    <Text style={styles.happy}>Today We Celebrate You...</Text>
                </View>
                
                <View style={styles.polaroid}>
                    <Video
                        style={styles.polaroid_img}
                        source={require("../images/video.mp4")}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        shouldPlay
                        isLooping
                        resizeMode="contain"
                    /> 
                </View>

                <View style={styles.age_div}>
                    <Text style={styles.age}>We Love You</Text>
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
        top: 80
    },
    happy: {
        fontSize: 45,
        fontWeight: "bold",
        textAlign: "center"
    },
    age_div: {
        width: 400,
        height: 230,
        backgroundColor: "rgba(255,255,255,0.0)",
        borderRadius: 50,
        padding: 10,
        zIndex: 1,
        position:"absolute",
        left: 5,
        top: 540
    },
    age: {
        fontSize: 60,
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
    },
    glitter: {
        position: "absolute",
        zIndex: 1,
    ...StyleSheet.absoluteFillObject
    }
});

export default VideoScreen;

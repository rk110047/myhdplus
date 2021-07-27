import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import BaseScreen from '../base/BaseScreen';
import { styles } from './About.style';
import logo from '../../../assets/imgs/gibstat.jpeg';
import { ColorConst } from "../../utils/Constants";


class TandC extends Component {


    render() {
        return (
            <BaseScreen arrow>
                <View style={{ padding: 10, flex: 1 }}>
                    <View style={{ alignItems: "center", marginVertical: 10 }}>
                        <Text style={{ color: "#fff", fontWeight: "bold" }}>
                            Terms of Use HD+ Apps
                        </Text>
                    </View>
                    <ScrollView>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ color: "#fff", fontWeight: "700" }}>
                                1. Scope and general information
                        </Text>
                        </View>
                        <View>
                            <Text style={{ color: "#fff" }}>
                                (1) Welcome to HD+ and our apps. The operator of the apps is SES HD PLUS Ghana Ltd.. You can find more information about us in our imprint.
                        </Text>
                        </View>
                        <View>
                            <Text style={{ color: "#fff" }}>
                                (2) In our apps, you can use various HD+ services and functions ("functions"). So that you always feel comfortable, we explain to you in these Terms of Use how the apps work and which rules apply to the use of the functions.
                        </Text>
                        </View>
                        <View>
                            <Text style={{ color: "#fff" }}>
                                (3) Our data protection provisions also apply to the use of our apps. If you have any questions or suggestions, please feel free to contact us.
                        </Text>
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ color: "#fff", fontWeight: "700" }}>
                                2. General functions and HD+ account
                        </Text>
                        </View>
                        <View>
                            <Text style={{ color: "#fff" }}>
                                (1) You can use various functions in the apps. For some functions, you only need to install and open the app on your device (e.g. smartphone, tablet or smart TV), for other functions you need to be logged in to the app with your HD+ account ("Account") or you need additional devices or hard-ware, which we will point out to you in particular. For some features, your device also needs an internet and satellite connection.
                        </Text>
                        </View>
                        <View>
                            <Text style={{ color: "#fff" }}>
                                (2) We are entitled to block you or delete your Account if, for example, you seriously or repeatedly violate our Terms of Use.
                        </Text>
                        </View>
                        <View>
                            <Text style={{ color: "#fff" }}>
                                (3) Some of our optional features may be subject to a fee. If you want to use a paid function, you can either buy or activate it via dealers or our web shop. Depending on the feature, you can also activate it directly within an app or via your device. For each paid feature, we will tell you exactly where and how you can buy or unlock it. Please note that paid features are subject to separate terms and conditions.
                        </Text>
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ color: "#fff", fontWeight: "700" }}>
                                3. Special features of the apps
                        </Text>
                        </View>
                        <View>
                            <Text style={{ color: "#fff" }}>
                                The features, services and benefits of our apps can be found in the respective product descriptions in the app store, in the app or on our website.
                        </Text>
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ color: "#fff", fontWeight: "700" }}>
                                4. Permission of use, liability and warranty
                        </Text>
                        </View>
                        <View>
                            <Text style={{ color: "#fff" }}>
                                (1) The Apps contain under copyright or otherwise protected content to which we or our licensors have corresponding rights. To enable you to use the apps, we grant you a simple, non-transferable right to use the functions you use as intended and as provided, exclusively for private and non-commercial use in your household. We point out that a distribution or publication outside your household is not allowed. Your authorization expires if you no longer use the function, delete the app or your account, or we no longer provide the function.
                        </Text>
                        </View>
                        <View>
                            <Text style={{ color: "#fff" }}>
                                (2) We provide services via the apps by using communication networks or technical facilities of third parties. Of course, we strive to provide you with all functions as continuously as possible, without disruptions and on as many devices as possible. Unfortunately, this is not technically possible. In addition, the availability and quality of some functions depends, for example, on the performance of your device, your cable, satellite or (mobile) Internet connection or your local Wi-Fi network. Therefore, we do not guarantee an undisturbed provision or a permanent availability of certain functions. It may happen that access to certain functions is restricted in whole or in part, tempo-rarily or permanently.
                        </Text>
                        </View>
                        <View>
                            <Text style={{ color: "#fff" }}>
                                (3) There is no right that we will permanently maintain and provide apps or functions. In particular, we can adapt, change or discontinue apps or functions at any time and will take your legitimate interests into account appropriately.
                        </Text>
                        </View>
                        <View>
                            <Text style={{ color: "#fff" }}>
                                (4) If you violate the provisions of our Terms of Use, you indemnify us against all justified claims of third parties due to your violation. We reserve the right to take appropriate measures to defend ourselves against claims by third parties and to claim damages and other justified claims against you.
                        </Text>
                        </View>
                        <View>
                            <Text style={{ color: "#fff" }}>
                                (5) Beyond that, we are only liable for damage caused to you by intentional or grossly negligent conduct on our part or on the part of one of our vicarious agents..
                        </Text>
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ color: "#fff", fontWeight: "700" }}>
                                5. Privacy
                        </Text>
                        </View>
                        <View>
                            <Text style={{ color: "#fff" }}>
                                In addition to these Terms of Use, our HD+ Apps Privacy Policy also applies to the use of our apps. In our HD+ apps privacy policy, we explain when, how, and which anonymous and personal data our apps process..
                        </Text>
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ color: "#fff", fontWeight: "700" }}>
                                6. Miscellaneous
                        </Text>
                        </View>
                        <View>
                            <Text style={{ color: "#fff" }}>
                                We are entitled to change our Terms of Use at any time. If we make changes, we will notify you, as far as technically possible, the next time you start an app. If you use an app, the use is determined by the respective current Terms of Use. You should therefore regularly review the applicable Terms of Use when you use one of our apps.
                        </Text>
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ color: "#fff", fontWeight: "700" }}>
                                © HD PLUS – July 2021
                        </Text>
                        </View>
                    </ScrollView>
                </View>
            </BaseScreen>
        );
    }
}



export { TandC };
import {Image, Text, Touchable, TouchableOpacity, View } from 'react-native'
import {styles} from "./style"

export default function Index(){
    return(

        <View style={styles.container}>

            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("@/assets/images/Banner.png")}/>
            </View>
            <Text style={styles.restaurantName}>Rocket Grub</Text>
            <Text style={styles.subtitle}>Um Lanche de Outro Mundo!</Text>

            <View>

                <View style={styles.tabs}>
                    {["Combos", "Lanches", "Bebidas", "Sobremesas"].map((tab) => (
                        <TouchableOpacity>
                            <Text style={styles.tabText} >{tab}</Text>
                        </TouchableOpacity>
                    ))} 
                </View>

            </View>



        </View>

    )
}


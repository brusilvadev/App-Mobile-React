import { Link, router } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export default function CadastrarScreen() {
    function handleLogin() {
         router.replace("/home/page")
    }



    return(
        
        <View style={styles.container}>
            
            <Image
                source={require("@/assets/images/LogoSimples.png")}
                style={{ 
                    width: 200, 
                    height: 200,
                    alignSelf: 'center', // Para centralizar a imagem
                    marginVertical: 20 // Espaço acima e abaixo
                  }} 
            />

            
            
            
            <View> 
                <Text style={styles.textdetails}>Seu Nome</Text>
                <TextInput placeholder="Como deseja ser chamado?" style={styles.input}/>
            </View>

            <View> 
                <Text style={styles.textdetails}>CPF</Text>
                <TextInput placeholder="Digite seu CPF" style={styles.input}/>
            </View>

            <View> 
                <Text style={styles.textdetails}>Data de nascimento</Text>
                <TextInput placeholder="Em que dia você nasceu?" style={styles.input}/>
            </View>
            
            <View> 
                <Text style={styles.textdetails}>E-mail</Text>
                <TextInput placeholder="Digite seu email" style={styles.input}/>
            </View>

            <View>
                <Text style={styles.textdetails}>Senha</Text>
                <TextInput placeholder="Sua senha"
                secureTextEntry={true} style={styles.input}/>
            </View>

        <TouchableOpacity onPress={handleLogin} style={styles.btn}>
            <Text>Finalizar</Text>
        </TouchableOpacity>

        <Link href={"/"} style={styles.textdetails}>Já possui uma conta? Faça Login!</Link>



        </View>
    )
}
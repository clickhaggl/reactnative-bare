import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/sign-in" style={{fontSize: 20}}>Sign In</Link>
      
      <Link href="/profile">Profile</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/properties/1">Properties</Link>
      
    </View>
  );
}



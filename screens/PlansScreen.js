import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Plans from "../data/Plans";
import { Fontisto, Entypo } from "@expo/vector-icons";
import { useStripe } from "@stripe/stripe-react-native";

const PlansScreen = () => {
  const data = Plans;
  const [plans, setPlans] = useState([]);
  const [price, setPrice] = useState();
  const stripe = useStripe();

  return (
    <>
      <ScrollView style={{ marginTop: 50 }}>
        <View style={styles.container}>
          <Text style={styles.planText}>
            Choose the plan that is right for you
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
          >
            <AntDesign name="check" size={24} color="#E50914" />
            <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
              Watch all you want Ad Free
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
          >
            <AntDesign name="check" size={24} color="#E50914" />
            <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
              Recommenations just for you
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
          >
            <AntDesign name="check" size={24} color="#E50914" />
            <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
              Cancel your plan anytime
            </Text>
          </View>
          <View style={{ marginTop: 20 }} />
          {data.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                setPlans(item.name);
                setPrice(item.price);
              }}
              style={
                plans.includes(item.name)
                  ? {
                      height: 160,
                      borderRadius: 7,
                      borderColor: "#E50914",
                      borderWidth: 2,
                      padding: 15,
                      margin: 10,
                    }
                  : {
                      height: 160,
                      borderRadius: 7,
                      borderColor: "#E50914",
                      borderWidth: 0.5,
                      padding: 15,
                      margin: 10,
                    }
              }
              key={index}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#E50914",
                    padding: 10,
                    width: 120,
                    borderRadius: 7,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>
                    Price: £{item.price}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{ color: "gray", fontSize: 15, fontWeight: "500" }}
                  >
                    Video Quality: {item.videoQuality}
                  </Text>
                  <Text
                    style={{ fontSize: 16, fontWeight: "500", marginTop: 3 }}
                  >
                    Resolution: {item.resolution}
                  </Text>
                </View>
                <Fontisto
                  style={{ marginRight: 6 }}
                  name="netflix"
                  size={28}
                  color="black"
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 16 }}>Devices You Can Watch On: </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {item.devices.map((device, index) => (
                    <Entypo
                      key={index}
                      style={{ marginRight: 6 }}
                      name={device.name}
                      size={27}
                      color="#E50914"
                    />
                  ))}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {plans.length > 0 ? (
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#E50914",
            padding: 10,
            marginBottom: 15,
            height: 55,
          }}
        >
          <View>
            <Text style={styles.panel}>Selected Plan: {plans}</Text>
          </View>
          <Pressable>
            <Text style={styles.panel}> PAY £{price}</Text>
          </Pressable>
        </Pressable>
      ) : null}
    </>
  );
};

export default PlansScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  panel: {
    fontSize: 17,
    color: "white",
    fontWeight: "600",
  },
  cards: {
    height: 160,
    borderRadius: 7,
    borderColor: "#E50914",
    borderWidth: 0.5,
    padding: 15,
    margin: 10,
  },
  planText: {
    fontSize: 17,
    fontWeight: "600",
  },
});

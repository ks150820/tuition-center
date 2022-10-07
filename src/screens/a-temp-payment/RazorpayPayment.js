import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import axios from 'axios';
import {encode} from 'base-64';
import RazorpayCheckout from 'react-native-razorpay';
import {COLORS} from '@resources/colors';

const amount = 555500;
const currency = 'INR';
// TODO : Move this credentials to .env file
const KEY_ID = 'rzp_test_7heVG8v2bmt06Q';
const KEY_SECRET = 'A0lDyC934KlcnPW4yUWT3Thw';

const RazorpayPayment = () => {
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    var basicAuth = 'Basic ' + encode(KEY_ID + ':' + KEY_SECRET);
    axios
      .post(
        'https://api.razorpay.com/v1/orders',
        {
          amount,
          currency,
        },
        {
          headers: {Authorization: basicAuth},
        },
      )
      .then(function (response) {
        setOrderId(response.data.id);
      })
      .catch(function (error) {
        console.log('Axios error occurred : ', error);
      });
  }, []);

  const handleStartPayment = () => {
    const options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency,
      key: KEY_ID,
      amount,
      name: 'upGrad Education',
      order_id: orderId,
      prefill: {
        email: 'test.user@example.com',
        contact: '9191919191',
        name: 'Test User',
      },
      theme: styles.pgTheme,
    };

    orderId &&
      RazorpayCheckout.open(options)
        .then(data => {
          // handle success
          alert(`Success: ${data.razorpay_payment_id}`);
        })
        .catch(error => {
          // handle failure
          alert(`Error: ${error.code} | ${error.description}`);
        });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Pay 5,555"
        onPress={handleStartPayment}
        disabled={orderId === ''}
      />
    </View>
  );
};

export default RazorpayPayment;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  pgTheme: {
    color: COLORS.PRIMARY,
  },
});

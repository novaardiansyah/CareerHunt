import React, { useEffect, useState } from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'

const Layout = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const loadFontsAndHideSplash = async () => {
      await SplashScreen.preventAutoHideAsync()
      await Font.loadAsync({
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMbold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMregular: require('../assets/fonts/DMSans-Regular.ttf')
      })
      await SplashScreen.hideAsync()
      setIsReady(true)
    }

    loadFontsAndHideSplash()
  }, [])

  if (!isReady) {
    return null
  }

  return <Stack />
}

export default Layout
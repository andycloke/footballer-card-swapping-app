# Image Swipe App

## Instructions

1.  clone this repo
2.  `cd` into the repo
3.  Install dependencies using `yarn`
4.  Start the app with `yarn start`
5.  Install the [Expo](https://expo.io/) app on your phone (and sign up) if you haven't already done so.
6.  Press 'S' in the running packager, enter your phone numberand click 'Enter' in the running packager to send an expo link to your phone number. Then click this in your phone to run the app. You'll need to be on the same WiFi network as your computer.

## Requirements

* A React Native App that displays images in full screen, and allow the user to swipe between them.

## Technology

* React Native bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app)
* TypeScript
* [react-native-swiper-flatlist](https://github.com/gusgard/react-native-swiper-flatlist) library used to implement a swippable list.

## Discussion

* I organised the project as I would a larger project, by including a 'common' directory for common, reusable components that could be used by different features within the app. E.g. the `<ImageCarousel/>` component is found here, then imported into `<PlayersCarousel/>` for a specific use.
* I added an optional `backgroundColor` prop to `<ImageCarousel/>` to make it more flexible.
* I added snapshot tests using `react-test-renderer`. These should protect agaisnt future regressions.
* `react-native-swiper-flatlist` was chosen because it uses React Native's `<Flatlist/>` which is more performant than the `<ScrollView/>` used by a lot of swippable card/ list libraries. It also seems well maintained (last updated 20 days ago + no open issues), and to have sensible props.
* `react-native-swiper-flatlist`'s exported component didn't have TypeScript types so I added them myself in `types.d.ts`.

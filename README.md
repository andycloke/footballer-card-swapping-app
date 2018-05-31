# Footballer Card Swapping App

## Instructions

1.  `git clone https://github.com/andycloke/footballer-card-swapping-app.git`
2.  `cd footballer-card-swapping-app`
3.  Install dependencies using `yarn`
4.  Start the app with `yarn start`
5.  Install the [Expo](https://expo.io/) app on your phone (and sign up) if you haven't already done so.
6.  Press 'S' in the running packager, enter your phone numberand click 'Enter' in the running packager to send an expo link to your phone number. Then click this in your phone to run the app i Expo. You'll need to be on the same WiFi network as your computer.

## Requirements

* A React Native App that displays images in full screen, and allow the user to swipe between them.
* Detail on how I would approach one of the a more complicated animation, based on a video of this animation.

## Technology

* React Native bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app)
* TypeScript
* [react-native-swiper-flatlist](https://github.com/gusgard/react-native-swiper-flatlist) library used to implement a swippable list.
* Animations done with React Native Animated API

## Discussion

* I organised the project as I would a larger project, by including a 'common' directory for common, reusable components that could be used by different features within the app. E.g. the `<ImageCarousel/>` component is found here, then imported into `<PlayerMenu/>` for a specific use.
* `react-native-swiper-flatlist` was chosen because it uses React Native's `<Flatlist/>` which is more performant than the `<ScrollView/>` used by a lot of swippable card/ list libraries. It also seems well maintained (last updated 20 days ago + no open issues), and to have sensible props.
* `react-native-swiper-flatlist`'s exported component didn't have TypeScript types so I added them myself in `types.d.ts`.
* I added snapshot tests using `react-test-renderer`. These should protect agaisnt future regressions.
* I implemented the animation using RN's Animated API in the `<PlayerSwap>` component. One animated value property drives the animation of the scale, zIndex and movement of both player cards.
* To get to second screen I used component State in the PlayerMenu component to render a different component. With more time I would use proper routing using React Router so that views were properly organised at different locations, and other benefits such as a working back button on Android.

## Next Steps / Improvements

* Handle device being turned landscape / lock it in Portrait depending on project requirements.
* When returning from swapping view to carousel, active index shouldn't reset to 0.

declare module 'react-native-swiper-flatlist' {
  type SwiperFlatListProps = {
    data?: Array<any>;
    children?: JSX.Element[];
    renderItem?: (props: any) => React.Component;
    onMomentumScrollEnd?: (e: { index: number }) => void;
    vertical?: boolean;
    index?: number;
    renderAll?: boolean;
    showPagination?: boolean;
    paginationDefaultColor?: string;
    paginationActiveColor?: string;
    PaginationComponent?: React.Component;
    autoplay?: boolean;
    autoplayDelay?: number;
    autoplayLoop?: boolean;
  };
  class SwiperFlatList extends React.Component<SwiperFlatListProps, any> {}
  export default SwiperFlatList;
}

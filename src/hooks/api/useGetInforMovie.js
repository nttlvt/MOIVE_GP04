import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import qs from 'qs';
import { quanLyPhimServices } from '../../services/quanLyPhim.services';

export const useGetInforMovie = () => {
  const { maPhim } = useParams();

  const q = useQuery({
    queryKey: ['MovieInfo', maPhim],
    queryFn: async () => {
      const query = qs.stringify({ MaPhim: maPhim }, { addQueryPrefix: true });
      return  quanLyPhimServices.getInfoMovie(query);
    }
  });


  return {
    ...q,
    data: q?.data?.data?.content,
  };
};

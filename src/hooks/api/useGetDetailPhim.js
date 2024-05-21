import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import qs from 'qs';
import { quanLyPhimServices } from '../../services/quanLyPhim.services';

export const useGetDetailPhim = () => {
  const { id } = useParams();

  const q = useQuery({
    queryKey: ['MovieDetail', id],
    queryFn: async () => {
      const query = qs.stringify({ MaPhim: id }, { addQueryPrefix: true });
      return  quanLyPhimServices.getMovieById(query);
    }
  });


  return {
    ...q,
    data: q?.data?.data?.content,
  };
};

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import qs from 'qs';
import { quanLyPhimServices } from '../../services/quanLyPhim.services';

export const useDeletePhim = (maPhimQ) => {
  const { maPhim } = useParams();
  maPhimQ = maPhim

  const q = useQuery({
    queryKey: ['MovieDelete', maPhimQ],
    queryFn: async () => {
      const query = qs.stringify({ MaPhim: maPhimQ }, { addQueryPrefix: true });
      // return  quanLyPhimServices.deletePhim(query);
      return query
    }
  });
  return {
    del:q
  };
};

package springboot.react.demo.repositories;

import java.util.List;
import springboot.react.demo.models.*;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface StudentRepository extends PagingAndSortingRepository<Student, Long> {
  List<Student> findByLastName(@Param("name") String name);
}
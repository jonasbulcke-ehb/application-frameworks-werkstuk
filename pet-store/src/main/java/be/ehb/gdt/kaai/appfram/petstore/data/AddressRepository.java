package be.ehb.gdt.kaai.appfram.petstore.data;

import be.ehb.gdt.kaai.appfram.petstore.models.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}

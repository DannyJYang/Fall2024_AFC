package entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="monster")
public class Monster {

    @Id
    private Long id;

    private String name;
    private String icon;
    private String weaknessChart;






}

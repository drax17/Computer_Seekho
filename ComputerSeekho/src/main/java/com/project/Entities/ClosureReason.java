package com.project.Entities;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "closure_reason")
@Data
public class ClosureReason {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "closure_reason_id")
    private int closureReasonId;

    @Column(name = "closure_reason_desc")
    private String closureReasonDesc;

    public int getClosureReasonId() {
        return closureReasonId;
    }

    public void setClosureReasonId(int closureReasonId) {
        this.closureReasonId = closureReasonId;
    }

    public String getClosureReasonDesc() {
        return closureReasonDesc;
    }

    public void setClosureReasonDesc(String closureReasonDesc) {
        this.closureReasonDesc = closureReasonDesc;
    }
}

package com.domain;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ContactForm {

    @NotEmpty
    private String name;

    @NotEmpty
    private String email;

    @NotEmpty
    private String message;
}

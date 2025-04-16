package org.wcs.invoice_api.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wcs.invoice_api.entity.Invoice;
import org.wcs.invoice_api.entity.User;
import org.wcs.invoice_api.service.InvoiceService;
import org.wcs.invoice_api.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final InvoiceService invoiceService;
    private final UserService userService;

    public AdminController(InvoiceService invoiceService, UserService userService) {
        this.invoiceService = invoiceService;
        this.userService = userService;
    }

    // GET /invoices : retourne les factures de tous les utilisateurs
    @GetMapping("/invoices")
    public List<Invoice> getAllInvoices() {
        return invoiceService.getAllInvoices();
    }

    // GET /invoices : retourne tous les utilisateurs
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}

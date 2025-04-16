package org.wcs.invoice_api.controller;

import jakarta.validation.Valid;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import org.wcs.invoice_api.entity.Invoice;
import org.wcs.invoice_api.entity.User;
import org.wcs.invoice_api.repository.UserRepository;
import org.wcs.invoice_api.service.InvoiceService;

import java.util.List;


@RestController
@RequestMapping("/invoices")
public class InvoiceController {

    private final InvoiceService invoiceService;
    private final UserRepository userRepository;

    public InvoiceController(InvoiceService invoiceService, UserRepository userRepository) {
        this.invoiceService = invoiceService;
        this.userRepository = userRepository;
    }

    // GET /invoices : retourne les factures de l'utilisateur connecté
    @GetMapping
    public List<Invoice> getUserInvoices(@AuthenticationPrincipal UserDetails userDetails) {
        String email = userDetails.getUsername();
        User user = this.userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("utilisateur non trouvé"));
        List<Invoice> invoices = this.invoiceService.getInvoicesForUser(user);
        return invoices;
    }

    // POST /invoices : permet à l'utilisateur de créer une nouvelle facture
    @PostMapping
    public Invoice createInvoice(@RequestBody Invoice invoice, @AuthenticationPrincipal UserDetails userDetails) {
        String email =userDetails.getUsername();
        User user = this.userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("utilisateur non trouvé"));
        invoice.setUser(user);
        Invoice newInvoice = this.invoiceService.save(invoice);
        return newInvoice;
    }
}

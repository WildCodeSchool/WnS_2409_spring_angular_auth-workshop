-- Utilisateurs (mot de passe hashé avec BCrypt)
INSERT INTO users (email, password)
VALUES
    ('user1@example.com', '$2y$10$ZHfgSJRqZ8OAZ0fDDeZO5uA6bEonEIqUqhg.8pYMKQf/t1rQiXUri'), -- "password123"
    ('admin@example.com', '$2y$10$oWIMtzo5xcvptV.MpNCmDeiaBHdTyNV1EnTmuA0IRn8MNtVOl.DeW'); -- "adminpass"

-- Rôles
INSERT INTO user_roles (user_id, roles)
VALUES
    (1, 'ROLE_USER'),
    (2, 'ROLE_ADMIN');

-- Factures
INSERT INTO invoice (description, amount, date, user_id)
VALUES
    ('Facture Electricité Janvier', 89.99, '2024-01-15', 1),
    ('Facture Eau Février', 42.50, '2024-02-10', 1),
    ('Facture Internet Mars', 39.90, '2024-03-05', 1);

<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191106173407 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('INSERT INTO users (email, roles, password, created_at) VALUES ("superadmin@nfq.lt", JSON_ARRAY("ROLE_SUPER_ADMIN"), "$argon2id$v=19$m=65536,t=4,p=1$4I781nPiyfSchHy2GnJIig$K5avYbSAmYiFc9LJ8kBBpX7+EolBFMqiSQ6sIFms12s",  now())');


    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}

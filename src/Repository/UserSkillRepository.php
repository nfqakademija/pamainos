<?php

namespace App\Repository;

use App\Entity\UserSkill;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UserSkill|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserSkill|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserSkill[]    findAll()
 * @method UserSkill[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserSkillRepository extends ServiceEntityRepository
{
    /**
     * UserSkillRepository constructor.
     *
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserSkill::class);
    }

    /**
     * @param int $userId
     *
     * @return array
     */
    public function findUserSkills(int $userId): array
    {
        return $this->findBy([
            'user' => $userId
        ]);
    }
}

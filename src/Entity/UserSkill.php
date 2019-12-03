<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserSkillRepository")
 * @ORM\Table(name="user_skill", indexes={@ORM\Index(name="skill_idx", columns={"skill"})})
 */
class UserSkill
{
    const SKILL_LEVEL_JUNIOR = 'Junior';
    const SKILL_LEVEL_MIDDLE = 'Middle';
    const SKILL_LEVEL_SENIOR = 'Senior';

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="userSkills")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Skill", inversedBy="userSkills")
     * @ORM\JoinColumn(nullable=false)
     */
    private $skill;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $level;

    /**
     * @var \DateTime
     * @ORM\Column(type="datetime", name="created_at")
     */
    private $createdAt;

    /**
     * @var \DateTime
     * @ORM\Column(type="datetime", name="updated_at", nullable=true)
     */
    private $updatedAt;

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return User|null
     */
    public function getUserId(): ?User
    {
        return $this->user;
    }

    /**
     * @param User|null $user
     *
     * @return UserSkill
     */
    public function setUserId(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Skill|null
     */
    public function getSkillId(): ?Skill
    {
        return $this->skill;
    }

    /**
     * @param Skill|null $skill
     *
     * @return UserSkill
     */
    public function setSkillId(?Skill $skill): self
    {
        $this->skill = $skill;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getLevel(): ?string
    {
        return $this->level;
    }

    /**
     * @param string $level
     *
     * @return UserSkill
     */
    public function setLevel(string $level): self
    {
        $this->level = $level;

        return $this;
    }

    /**
     * @param \DateTime $createdAt
     *
     * @return UserSkill
     */
    public function setCreatedAt(\DateTime $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return \DateTime
     */
    public function getUpdatedAt(): \DateTime
    {
        return $this->updatedAt;
    }

    /**
     * @param \DateTime $updatedAt
     *
     * @return UserSkill
     */
    public function setUpdatedAt(\DateTime $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
}

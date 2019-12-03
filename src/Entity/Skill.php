<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SkillRepository")
 * @ORM\Table(name="skill")
 */
class Skill
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

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
     * @ORM\OneToMany(targetEntity="App\Entity\UserSkill", mappedBy="skill_id")
     */
    private $userSkills;

    /**
     * Skill constructor.
     */
    public function __construct()
    {
        $this->userSkills = new ArrayCollection();
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @param string $name
     *
     * @return Skill
     */
    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|UserSkill[]
     */
    public function getUserSkills(): Collection
    {
        return $this->userSkills;
    }

    /**
     * @param UserSkill $userSkill
     *
     * @return Skill
     */
    public function addUserSkill(UserSkill $userSkill): self
    {
        if (!$this->userSkills->contains($userSkill)) {
            $this->userSkills[] = $userSkill;
            $userSkill->setSkillId($this);
        }

        return $this;
    }

    /**
     * @param UserSkill $userSkill
     *
     * @return Skill
     */
    public function removeUserSkill(UserSkill $userSkill): self
    {
        if ($this->userSkills->contains($userSkill)) {
            $this->userSkills->removeElement($userSkill);
            // set the owning side to null (unless already changed)
            if ($userSkill->getSkillId() === $this) {
                $userSkill->setSkillId(null);
            }
        }

        return $this;
    }

    /**
     * @param \DateTime $createdAt
     *
     * @return Skill
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
     * @return Skill
     */
    public function setUpdatedAt(\DateTime $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
}
